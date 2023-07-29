import React from 'react';
import FindRubbishCollections from '../components/FindRubbishCollections';
import CollectionsDays from '../components/CollectionsDays';
import RelatedContent from '../components/RelatedContent';
import MoreServices from '../components/MoreServices';
import { Col, Row } from 'antd';

const RubbishCollection = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <FindRubbishCollections />
        <CollectionsDays />
      </Col>
      <Col xs={24} sm={24} md={10} lg={8} xl={8} className="border-top border-info" style={{ marginTop: 125 }}>
        <RelatedContent />
        <MoreServices />
      </Col>
    </Row>
  );
};

export default RubbishCollection;
