import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CatSideBar from "../elements/category-bar";
import ShopFeed from "../elements/feed";

const HomeLayout = () => {
  const categories = [
    { name: "Electronics", id: 1 },
    { name: "Clothing", id: 2 },
    { name: "Restaurants", id: 3 },
    { name: "Software Development", id: 4 },
    { name: "Bakery", id: 5 },
    { name: "Icecream parlour", id: 6 },
    { name: "General Stores", id: 7 },
    { name: "Department Stores", id: 8 },
    { name: "Sweets", id: 9 },
    { name: "Electronics", id: 10 },
    { name: "Clothing", id: 11 },
    { name: "Restaurants", id: 12 },
    { name: "Software Development", id: 13 },
    { name: "Bakery", id: 14 },
    { name: "Icecream parlour", id: 15 },
    { name: "General Stores", id: 16 },
    { name: "Department Stores", id: 17 },
    { name: "Sweets", id: 18 },
  ];

  return (
    <Container className="p-0 m-0" fluid>
      <Row>
        <Col md={3} className="pt-1 pr-2 d-none d-md-block">
          <CatSideBar categories={categories} />
        </Col>
        <Col xs={12} md={9} className="d-block pl-3 pl-md-1 pr-3 py-2">
          <ShopFeed />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeLayout;
