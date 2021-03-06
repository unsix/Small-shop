import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import 'moment/locale/zh-cn'
class Apps extends React.Component {
  render() {
    return (
      <div>
        <LocaleProvider locale={zhCN}>
          {this.props.children}
        </LocaleProvider>
      </div>
    );
  }
}

export default Apps
