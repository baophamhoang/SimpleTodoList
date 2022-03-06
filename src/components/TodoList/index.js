import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState, useEffect} from 'react';
import Todo from '../Todo';
import { addTodos } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid';
import { useDispatch, useSelector  } from 'react-redux';
import { todoListSelector, filterListSelector } from '../../redux/selectors';
import FilteredList from '../FilteredList';

export default function TodoList() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector(todoListSelector);

  

  const handleInput = (e) =>{
    setTodo(e.target.value);
  }
  const handlePriority = (e)=>{
    setPriority(e)
  }
  const handleAdd = () =>{
    dispatch(addTodos({
      id: uuidv4(),
      name: todo,
      priority: priority,
      completed: false
    }))
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          <FilteredList/>
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleInput}/>
          <Select defaultValue="Medium" onChange={handlePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
