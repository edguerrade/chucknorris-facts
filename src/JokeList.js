import React, { PureComponent } from 'react';
import {
  InfiniteLoader,
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';

class JokeList extends PureComponent {
  cache = new CellMeasurerCache({
    defaultHeight: 90,
    minHeight: 90,
    fixedWidth: true
  });

  _getNRandomJoke = async nJokes => {
    console.log('_getNRandomJoke', nJokes);
    let jokes = [];
    while (nJokes) {
      const joke = await this.props.getJoke();
      jokes.push(joke);
      nJokes--;
    }
    return jokes;
  };

  _isRowLoaded = ({ index }) => !!this.props.list[index];

  _loadMoreRows = ({ startIndex, stopIndex }) => {
    const { list, onChangeList } = this.props;
    const increment = stopIndex - list.size - 1;
    console.log({
      list,
      startIndex,
      stopIndex,
      increment
    });
    if (list[stopIndex] || list[startIndex] || increment < 1) {
      return;
      //   return onChangeList(prevList => {
      //     return prevList;
      //   });
    }

    console.log({
      name: 'wohooooooo'
    });
    
    onChangeList(prevList => {
      return prevList.concat(
        Array(increment).fill({ id: 0, value: 'Loading...' })
      );
    });

    return this._getNRandomJoke(increment).then(jokes => {
      return onChangeList(prevList => {
        return prevList.splice(list.size, increment, ...jokes);
      });
    });
  };

  _rowRenderer = ({ index, key, parent, style }) => {
    const { list } = this.props;

    const row = list.get(index);

    let customStyle = {
      // Demo style
      backgroundColor: '#fff',
      color: '#333',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      // textAlign: 'center',
      paddingLeft: '10px'
    };

    if (index % 2) {
      customStyle = {
        ...customStyle,
        backgroundColor: '#333',
        color: '#fff'
      };
    }

    if (row) {
      return (
        <CellMeasurer
          cache={this.cache}
          columnIndex={0}
          key={key}
          parent={parent}
          rowIndex={index}
        >
          <div
            key={key}
            style={{
              ...style,
              ...customStyle
            }}
          >
            {this.props.children(row)}
          </div>
        </CellMeasurer>
      );
    }
  };

  render() {
    const { list } = this.props;
    const rowCount = list.size + 10; // As infinite load we assume that there always be 10 more
    return (
      <InfiniteLoader
        isRowLoaded={this._isRowLoaded}
        loadMoreRows={this._loadMoreRows}
        rowCount={rowCount}
        // threshold={10}
        // minimumBatchSize={10}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer disableHeight>
            {({ /*height,*/ width }) => (
              <List
                ref={registerChild}
                width={width}
                height={780}
                // height={height}
                onRowsRendered={onRowsRendered}
                rowCount={rowCount}
                deferredMeasurementCache={this.cache}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this._rowRenderer}
                // overscanRowCount={3}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    );
  }
}

export default JokeList;
