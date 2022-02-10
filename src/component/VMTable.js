import React from "react";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import classes from './VMTable.module.css'
import moment from 'moment'

const columns = [
  {
    title: '',
    dataIndex: 'key',
    className: classes.shortTitle,
  },
  {
    title: 'Vehicle ID',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    sorter: (a, b) => a.type.length - b.type.length,
  },
  {
    title: 'Lock/Unlock',
    dataIndex: 'islocked',
    sorter: (a, b) => a.islocked - b.islocked,
    render: (val)=> <React.Fragment>{val ? 'Lock':'Unlock'}</React.Fragment>
  },
  {
    title: 'Current Speed',
    dataIndex: 'speed',
    sorter: (a, b) => a.speed - b.speed,
    render: (val)=> <React.Fragment>{val + " km/h"}</React.Fragment>
  },
  {
    title: 'Battery level',
    dataIndex: 'batterylvl',
    sorter: (a, b) => a.battery - b.battery,
    render: (val)=> <React.Fragment>{val + "%"}</React.Fragment>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b)=> a.status.length - b.status.length,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: (a, b) => a.location - b.location,
    render: (val)=> <React.Fragment>{ val.toString().slice(0, 5) + "," + val.toString().slice(5) }</React.Fragment>
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastupdated',
    sorter: (a, b)=> new Date(moment(a.lastupdated)) - new Date(moment(b.lastupdated)),
    render: (val)=> {  
      const fullDate =   new Date(moment(val))
      const date = fullDate.toLocaleDateString('fr-CA', {timezone: 'MY'}) 
      const hoursData = fullDate.getHours().toString()
      const hours = hoursData.length > 1 ? hoursData : `0${hoursData}`
      const minData = fullDate.getMinutes().toString()
      const min = minData.length > 1 ? minData : `0${minData}`
      const suffix = hours >= 12 ? 'PM': 'AM'
      return (<React.Fragment>{ `${date} ${hours}.${min}${suffix}` }</React.Fragment>)
    }
  }
];

const VMTable = (props) => {
  const Data = [...props.data]


  return (
    <div className={classes.vmtable}>
      <Button type="primary" shape="round" icon={<PlusOutlined />} size="large" className={classes.btn}>
        New Vehicle
      </Button>
      <Table columns={columns} dataSource={Data} className={classes.table} />
    </div>
  );
};

export default VMTable;
