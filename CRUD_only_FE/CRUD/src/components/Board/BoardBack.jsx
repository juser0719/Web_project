import React , { Component } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import './Board.css';
import { fetchData } from '../api/index';
const url = "https://jsonplaceholder.typicode.com/albums";

class Row extends Component 
{
    render()
    {
       return (
        <tr>
        <td> 
            <img src="https://via.placeholder.com/50" alt="코딩이미지" />
        </td>
        <td>
            {this.props.id}  
        </td>
        <td>
            {this.props.title}
        </td>
        <td>    
            <div>
                <i class="fa fa-trash mr-3"></i>
                <i class="fa fa-edit"></i>
            </div>
        </td>
      </tr>
    ); 
    }
    
}

class Board extends Component 
{
    state = {
        datadList: []
      };
    
    componentDidMount() 
    {
        this.getBoardList();
    }


    async getBoardList() 
    {    
        const data = await fetchData();
        console.log(data);
        let dataList;
        if(data)
        {
            dataList = data.map(item => 
                (
                  <Row 
                    id = {item.id}
                    title={item.title} // 제목
                  ></Row>
                ));

            this.setState({
                dataList : dataList
            });
        }
        else
        {
            dataList = (
                <tr>
                  <td colSpan="2">게시물이 존재하지 않습니다.</td>
                </tr>
              );
              this.setState({
                dataList: dataList
              });
        }
    }

    render()
    {
   
        return(
    
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>img</th>
                    <th>idx</th>
                    <th>title</th>
                    <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dataList}
                </tbody>
            </Table>
            );
    }

};

export default Board;