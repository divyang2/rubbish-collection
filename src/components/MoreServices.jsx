import React from 'react';
import { Typography, Button } from 'antd';

const { Text } = Typography;

const MoreServices = () => {
  return (
    <div className="mt-4">
      <Text strong>More Services</Text>
      <div className="d-flex flex-column justify-content-start align-items-start">
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Request a replacement container</div>
        </Button>
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Report a missed collection</div>
        </Button>
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Book a bulky collection</div>
        </Button>
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Request an assisted collection</div>
        </Button>
      </div>
    </div>
  );
};

export default MoreServices;
