import { Button, Select, Form, Input } from 'antd';
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react';

const App = () => {
  const { Option } = Select;
  const [data, setData] = useState({
    MaleList: [],
    FemaleList: [],
    NaList: []
  })
  useEffect(()=>{
    console.log(data.MaleList.length+data.FemaleList.length+data.NaList.length);
  },[data])


  const onFinish = async(values) => {
    console.log('Success:', values);
    let newData = data;
    if (values.gender === "Male") {
      await newData.MaleList.push(values)
      // console.log(newData);
    }
    else if (values.gender === "Female") {
      await newData.FemaleList.push(values)
    
    }
    else {
     await newData.NaList.push(values)
      
    }
    
     setData(newData)
     console.log(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ width: "80%", marginTop: "100px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          margin: "0px auto"
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Na">Na</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        {
          <table style={{ margin: "0px auto", width: "80%", marginLeft: "250px" }}>
            <tbody>
              <tr style={{ border: "3px solid black" }}>
                <td style={{ border: "3px solid black", width: "33%", padding: "20px" }}>
                  <label>MaleList :</label><ul>
                    {data.MaleList.map((x) => <li key={x.name}>{x.name}</li>)}
                  </ul>
                </td>
                <td style={{ border: "3px solid black", width: "33%", padding: "20px" }}>
                  <label>FemaleList :</label><ul>
                    {data.FemaleList.map((x) => <li key={x.name}>{x.name}</li>)}
                  </ul>
                </td>
                <td style={{ border: "3px solid black", width: "33%", padding: "20px" }}>
                  <label>NaList :</label><ul>
                    {data.NaList.map((x) => <li key={x.name}>{x.name}</li>)}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default App;