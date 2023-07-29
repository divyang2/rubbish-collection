import React, { useEffect, useState } from 'react';
import { Col, Empty, Row, Spin, Typography } from 'antd';
import { connect } from 'react-redux';

const { Text, Title } = Typography;

const CollectionsDays = (props) => {
  const { collectionsList, collectionLoading } = props;
  const [CollectionListData, setCollectionListData] = useState([]);

  //set collection data to show on page
  useEffect(() => {
    if (collectionsList?.collectionDay?.length > 0) {
      setCollectionListData(collectionsList?.collectionDay);
    } else {
      setCollectionListData([]);
    }
  }, [collectionsList]);

  return (
    <div className="p-3">
      <Text strong>Your Next Collections</Text>
      {collectionLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spin />
        </div>
      ) : (
        <div>
          {CollectionListData?.length > 0 ? (
            <Row gutter={[16, 16]} className="p-2 d-flex justify-content-between">
              {CollectionListData.map((d, index) => {
                return (
                  <Col className="p-3" key={index} xs={24} sm={11} md={11} lg={11} xl={11} style={{ backgroundColor: d.binColor }}>
                    <Text className=" fs-6 text-white">
                      {d.binType} <br />
                      <Title className="text-white" level={4}>
                        {d.collectionDay}
                      </Title>
                    </Text>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 60 }}
              description={<span>Select Address to see Collection</span>}
            ></Empty>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ collectionData }) => {
  const { collectionsList, collectionLoading } = collectionData;
  return { collectionsList, collectionLoading };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsDays);
