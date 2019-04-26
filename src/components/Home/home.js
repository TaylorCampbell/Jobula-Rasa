import React, { Component } from "react";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";
import AddCardButton from "../Card/addCardButton";
import { AddCardFormInModal } from "../Card/";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TempIcon from "react-ionicons/lib/MdIonic";
import PriorityIcon from "react-ionicons/lib/MdRemove";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showAddCard: false,
      jobList: []
    };
  }

  handleCloseAddCard = () => {
    this.setState({ showAddCard: false });
  };

  handleShowAddCard = () => {
    this.setState({ showAddCard: true });
  };

  componentWillMount() {
    this.setState({ loading: true });

    this.props.firebase
      .job(this.props.firebase.auth.currentUser.uid)
      .on("value", snapshot => {
        if (snapshot.val()) {
          const jobObject = snapshot.val();
          const jobList = Object.keys(jobObject).map(key => ({
            ...jobObject[key]
          }));
          console.log(jobList);
          this.setState({
            jobList: jobList,
            loading: false
          });
        }
      });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div>
        <AddCardButton onClick={this.handleShowAddCard} />

        {this.state.jobList.map(job => {
          return <CardComponent key={job.id} job={job} />;
        })}

        <AddCardFormInModal
          show={this.state.showAddCard}
          onClose={this.handleCloseAddCard}
        />
      </div>
    );
  }
}

function truncate(string) {
  if (string.length > 8) return string.substring(0, 75) + "...";
  else return string;
}

const CardComponent = ({ job }) => (
  <Card style={{ width: "30rem" }}>
    <Card.Body>
      <Row>
        <Col xs={3}><TempIcon fontSize="100px" /></Col>
        <Col xs={8}>
          <Card.Title>{job.job_title}</Card.Title>
          <Card.Text>{truncate(job.job_description)}</Card.Text>
          <Card.Link href={job.job_link}>Job Link ></Card.Link>
        </Col>
        <Col xs={1}>
          <PriorityIcon fontSize="24px" />
        </Col>
      </Row>
      <Card.Text></Card.Text>
      {/* <Card.Link href={job.job_link}>Job Link ></Card.Link> */}
    </Card.Body>
  </Card>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
