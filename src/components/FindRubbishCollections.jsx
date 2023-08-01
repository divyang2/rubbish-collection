import React, { useEffect, useState } from 'react';
import { Typography, Input, Select, Button } from 'antd';
import { getAddressData, getCollectionData, clearReduxStore, clearCollectionDay } from '../redux/slice/collectionSlice';
import { connect } from 'react-redux';

const { Title, Text } = Typography;
const P_GUID = 'FF93E12280E5471FE053A000A8C08BEB'; //taking statically

const FindRubbishCollections = (props) => {
  const { addressDataList, getAddressData, getCollectionData, clearReduxStore, clearCollectionDay } = props;
  const [postcodeValue, setPostcodeValue] = useState('');
  const [addressOption, setAddressOption] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  //onchange input  setValue fot api and clearing selected & options
  const handleInputChange = (e) => {
    const value = e.toUpperCase();
    setSelectedAddress(null);
    setAddressOption([]);
    setPostcodeValue(value);
    clearCollectionDay([]);
  };

  //onSelect fetch data for collections
  const handleOnSelect = (value) => {
    setSelectedAddress(value);
    const apiPayload = {
      P_GUID: P_GUID,
      P_UPRN: value,
      P_CLIENT_ID: 130, //taking statically
      P_COUNCIL_ID: 260, //taking statically
    };
    getCollectionData(apiPayload);
  };

  //clearing field and reset all value
  const clearAllField = () => {
    setSelectedAddress(null);
    setAddressOption([]);
    setPostcodeValue('');
    clearReduxStore(null);
  };
  //check if input value grater than 6 than allow api call with 1 sec delay
  useEffect(() => {
    if (postcodeValue.length > 6) {
      const apiPayload = {
        P_GUID: P_GUID,
        P_POSTCODE: postcodeValue,
      };
      setTimeout(() => {
        getAddressData(apiPayload);
      }, 1000);
      setAddressOption([]);
    }
  }, [postcodeValue]);

  //changing select option in select field
  useEffect(() => {
    if (addressDataList?.ADDRESS?.length > 0) {
      const addressList = addressDataList?.ADDRESS?.map((d) => {
        return { value: d.UPRN, label: d.FULL_ADDRESS };
      });
      setAddressOption(addressList);
    }
  }, [addressDataList]);

  return (
    <div className="p-3">
      <div>
        <Title className="fw-bold">
          Find out your rubbish <br />
          collection day
        </Title>
      </div>
      <Text>Check when your rubbish collected.</Text>
      <div className="bg-body-secondary d-flex flex-column p-3 mt-2">
        <Text strong>Enter a postcode</Text>
        <Text type="secondary">For example SWA1A 2AA</Text>
        <Input className="rounded-0 mt-2" style={{ width: 125 }} maxLength={12} value={postcodeValue} onChange={(e) => handleInputChange(e.target.value)} />
        <div className="d-flex flex-column mt-3">
          <Text strong>Select an address</Text>
          <Select
            showSearch
            value={selectedAddress}
            style={{ width: 300 }}
            options={addressOption}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            onChange={handleOnSelect}
            placeholder="Please select address"
          />
        </div>
        <div className="mt-4">
          <Button className="p-0 " type="link" onClick={clearAllField}>
            <div className="text-decoration-underline">Clear address and start again</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ collectionData }) => {
  const { addressDataList } = collectionData;
  return { addressDataList };
};

const mapDispatchToProps = {
  getAddressData,
  getCollectionData,
  clearReduxStore,
  clearCollectionDay,
};
export default connect(mapStateToProps, mapDispatchToProps)(FindRubbishCollections);
