import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";

const TodoCard = (props) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="font-bold text-lg">
        {props.day} ({props.numberOfActivities})
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="list-decimal list-inside">
          <li>Mandi</li>
          <li>Sarapan</li>
          <li>Coding</li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button>Finish</Button>
        {props.propsTambahan}
      </CardFooter>
    </Card>
  );
};

TodoCard.propTypes = {
  day: PropTypes.string,
  numberOfActivities: PropTypes.number,
};

export default withBackground(withAlert(TodoCard));
