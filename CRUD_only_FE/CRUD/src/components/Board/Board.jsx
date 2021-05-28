import React , { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { fetchData } from '../api/index';

class Board extends Component 
{
  state = {
    data: [] 
  };

  async componentDidMount() 
  {
    const data = await fetchData();
    this.setState({data : data});
    console.log(this.state.data);
  }

  imageFormatter(cell, row){
    return "<img src='https://via.placeholder.com/50"+cell+"'/>" ;
  }

  remote(remoteObj) 
  {
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }

  onAddRow = (row) => 
  {
    this.state.data.push(row);
    this.setState({
      data: this.state.data
    });
  }

  onDeleteRow = (row) => 
  {
    this.state.data = this.state.data.filter((product) => {
      return product.id !== row[0];
    });

    this.setState({
      data: this.state.data
    });
  }

  onCellEdit = (row, fieldName, value) => 
  {
    const new_data = this.state.data;
    let rowIdx;
    const targetRow = new_data.find((prod, i) => 
    {
      if (prod.id === row.id)// inx 찾음
      {
        rowIdx = i;
        return true;
      }
      return false;
    });
    
    if (targetRow)
    {
      targetRow[fieldName] = value;
      new_data[rowIdx] = targetRow;
      this.setState({ data : new_data });
    }
  }

  render()
  {
    const cellEditProp = { mode: 'click' };
    const selectRow = { mode: 'checkbox' };
   
        return(
        <div className = "Outer">
          <div className = "Inner">
            <BootstrapTable 
            className = "container"
            data= {this.state.data }
            selectRow={ selectRow }
            remote={ this.remote }
            insertRow deleteRow pagination
            cellEdit={ cellEditProp }
            options={ {
                        onCellEdit: this.onCellEdit,
                        onDeleteRow: this.onDeleteRow,
                        onAddRow: this.onAddRow,
                        sizePerPageList: [ 5 ,10 ],
                        sizePerPage: 5
                      } }
            >
              <TableHeaderColumn dataField='id' isKey={ true } dataSort hidden={true}>Id</TableHeaderColumn>
              <TableHeaderColumn dataField="image" dataFormat={this.imageFormatter} editable={ false }>user Image</TableHeaderColumn>
              <TableHeaderColumn dataField='title' >Title</TableHeaderColumn>
            </BootstrapTable>
            </div>
        </div>

            );
    }

};

export default Board;