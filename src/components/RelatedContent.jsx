import React from 'react';
import { Typography, Button } from 'antd';

const { Text } = Typography;

const RelatedContent = () => {
  return (
    <div className="mt-4">
      <Text strong>Related Content</Text>
      <div className="d-flex flex-column justify-content-start align-items-start">
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Add to your calender</div>
        </Button>
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Download printable schedule</div>
        </Button>
        <Button className="p-0 " type="link">
          <div className="text-decoration-underline">Join our rubbish collection notification list</div>
        </Button>
      </div>
    </div>
  );
};

export default RelatedContent;
