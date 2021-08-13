import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./style.scss";

import {
  Table,
  Modal,
  Radio,
  DatePicker,
  Space,
  TimePicker,
  message,
} from "antd";
import { Popconfirm } from "antd";
import moment from "moment";
const { Column } = Table;

const data = [
  {
    key: 1,
    date: "28/7/2021",
    sleepTime: "22h15",
    wakeUpTime: "6h00",
    sleepDuration: "12h15",
  },
];

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [timeLine, setTimeLine] = useState("day");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalAdd = () => {
    setIsModalVisible(false);
    message.success("Entry has been added!");
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalReset = () => {
    let date = document
      .getElementsByClassName("_addEntryDateValue")[0]
      .getElementsByTagName("input")[0];
    date.value = moment().format("DD/MM/YYYY");
    date.title = moment().format("DD/MM/YYYY");
    date.defaultValue = moment().format("DD/MM/YYYY");
    let time = document.getElementsByClassName("_addEntryTimeValue");
    [...time].forEach((item) => {
      let input = item.getElementsByTagName("input")[0];
      input.value = "00:00";
      input.title = "00:00";
      input.defaultValue = "00:00";
    });
    message.warning("Form has been reset");
  };

  const handleEditModalAdd = () => {
    message.success("Entry has been edited!");
    setIsEditModalVisible(false);
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleEditModalReset = () => {
    message.warning("Form has been reset");
  };

  function onChangeDateFilter(date, dateString) {
    console.log(date, dateString);
  }

  const onChangeTimeLine = (e) => {
    console.log("radio4 checked", e.target.value);
    setTimeLine(e.target.value);
  };

  function confirmDelete(e) {
    console.log(e);
  }

  function cancelDelete(e) {
    console.log(e);
  }

  return (
    <div className="_home">
      <div className="_stat">
        <div className="_info">
          <div className="_addNewEntry">
            <button
              className="_addNewEntryBtn"
              type="primary"
              onClick={showModal}
            >
              <i className="fas fa-plus"></i> New entry
            </button>
            <div className="_addNewModal">
              <Modal
                title="Add new entry"
                visible={isModalVisible}
                destroyOnClose={true}
                onOk={handleModalAdd}
                onCancel={handleModalCancel}
                footer={[
                  <button
                    className="_footerBtn _modelResetBtn"
                    key="3"
                    onClick={handleModalReset}
                  >
                    Reset
                  </button>,
                  <button
                    className="_footerBtn _modelCancelBtn"
                    key="2"
                    onClick={handleModalCancel}
                  >
                    Cancel
                  </button>,
                  <button
                    className="_footerBtn _modelAddBtn"
                    key="1"
                    onClick={handleModalAdd}
                  >
                    Add now
                  </button>,
                ]}
              >
                <div className="_modalDate">
                  <span>Date: </span>
                  <DatePicker
                    className="_addEntryDateValue"
                    allowClear={false}
                    defaultValue={moment()}
                    format={["DD/MM/YYYY", "DD/MM/YY"]}
                  />
                </div>
                <div>
                  <span>Sleep time: </span>
                  <TimePicker
                    className="_addEntryTimeValue"
                    allowClear={false}
                    format={"HH:mm"}
                    defaultValue={moment("00:00", "HH:mm")}
                  />
                  <span> to </span>
                  <TimePicker
                    className="_addEntryTimeValue"
                    allowClear={false}
                    format={"HH:mm"}
                    defaultValue={moment("00:00", "HH:mm")}
                  />
                </div>
              </Modal>
              <Modal
                title="Edit entry"
                visible={isEditModalVisible}
                destroyOnClose={true}
                onOk={handleModalAdd}
                onCancel={handleModalCancel}
                footer={[
                  <button
                    className="_footerBtn _modelResetBtn"
                    key="3"
                    onClick={handleEditModalReset}
                  >
                    Reset
                  </button>,
                  <button
                    className="_footerBtn _modelCancelBtn"
                    key="2"
                    onClick={handleEditModalCancel}
                  >
                    Cancel
                  </button>,
                  <button
                    className="_footerBtn _modelAddBtn"
                    key="1"
                    onClick={handleEditModalAdd}
                  >
                    Edit now
                  </button>,
                ]}
              >
                <div className="_modalDate">
                  <span>Date: </span>
                  <DatePicker
                    allowClear={false}
                    defaultValue={moment()}
                    format={["DD/MM/YYYY", "DD/MM/YY"]}
                  />
                </div>
                <div>
                  <span>Sleep time: </span>
                  <TimePicker
                    allowClear={false}
                    format={"HH:mm"}
                    defaultValue={moment("00:00", "HH:mm")}
                  />
                  <span> to </span>
                  <TimePicker
                    allowClear={false}
                    format={"HH:mm"}
                    defaultValue={moment("00:00", "HH:mm")}
                  />
                </div>
              </Modal>
            </div>
          </div>
          <div className="_infoDetail">
            <h1>Good</h1>
            <p>
              Average sleep time: <span>7.8h/day</span>
            </p>
            <p>
              Average wake-up time: <span>6h35</span>
            </p>
            <p>
              Average bed time: <span>23h25</span>
            </p>
            <p>
              Days sleep &lt; 8h: <span>3</span>
            </p>
            <p>
              Days sleep &gt; 6h: <span>2</span>
            </p>
            <p className="_note">*Based on the last 7 days</p>
          </div>
        </div>
        <div className="_table">
          <div className="_filter">
            <div>
              <h2>Sleep stats</h2>
            </div>
            <div>
              <span>Seach by date: </span>
              <DatePicker
                onChange={onChangeDateFilter}
                format={["DD/MM/YYYY", "DD/MM/YY"]}
              />
            </div>
          </div>
          <Table
            dataSource={data}
            pagination={{
              defaultPageSize: 7,
            }}
          >
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Time of sleep" dataIndex="sleepTime" key="date" />
            <Column title="Wake up time" dataIndex="wakeUpTime" key="date" />
            <Column
              title="Sleep duration"
              dataIndex="sleepDuration"
              key="date"
            />
            <Column
              title="Action"
              key="action"
              render={() => (
                <Space size="middle">
                  <i
                    className="far fa-edit _tableActionEdit"
                    onClick={() => setIsEditModalVisible(true)}
                  ></i>
                  <Popconfirm
                    title="Are you sure to delete this entry?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href=".">
                      <i className="far fa-trash-alt _tableActionDel"></i>
                    </a>
                  </Popconfirm>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
      <div className="_chart">
        <h2>Sleep duration</h2>
        <div className="_timeLine">
          <Radio.Group
            options={[
              { label: "Day", value: "day" },
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
            ]}
            onChange={onChangeTimeLine}
            value={timeLine}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="_lineChart">
          <Line
            data={{
              labels: [
                "07/08",
                "08/08",
                "09/08",
                "10/08",
                "11/08",
                "12/08",
                "13/08",
              ],
              datasets: [
                {
                  data: [6, 6.5, 8, 7, 5, 9, 5],
                  label: "Sleep time",
                  borderColor: "#3e95cd",
                  fill: true,
                },
              ],
            }}
            options={{
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
