import {
  CheckCircleFilled,
  PlusCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import {FC} from 'react';
import {Badge, ListGroup, Image, Col} from 'react-bootstrap';
import CustomButton from './CustomButton';
import {ItemsList} from "../interface/Items";

interface Props {
  items: ItemsList
}


const Contacts: FC<Props> = ({items}) => {


	return (
    <div className="contacts-list">
      <div className="contacts-list__header">
        <h4>All Contacts ({items.length})</h4>
        <PlusCircleFilled/>
      </div>
      <div className="contacts-list__search-block">
        <SearchOutlined/>
        <input type="text" placeholder="Search contacts"/>
      </div>
      <div className="contacts-list__items">
        <div className="items-select-all">
					<span className={"iconsSelect"}><CheckCircleFilled/></span> <p>Select All</p>
          <CustomButton>Export All</CustomButton>
        </div>
				<hr/>
        <ListGroup variant="flush" >
          {
            items &&
            items.map((item, index)=>(<ListGroup.Item key={item.id}
            className="d-flex justify-content-between align-items-start"
          >
            <div className={"iconsContact"}>
              <CheckCircleFilled/>
            </div>
            <Image height={"50px"} width={"50px"}
                   src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg" roundedCircle/>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.name}</div>
              {item.phone}
            </div>
            <div className="contacts-list__header">
              <Badge key={item.name} bg="success" pill>
                {item.company.name}
              </Badge>
              <PlusCircleFilled/>
            </div>
          </ListGroup.Item>))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Contacts;
