import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Checkout from "./index";
import OrderCard from "../../components/OrderCard";
import CourseCard from "../../components/CourseCard";

describe("<Checkout/> view", () => {
  it(" should render  <OrderCard/>", () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(OrderCard)).to.have.lengthOf(1);
  });

  it(" should render  <CourseCard>", () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.find(CourseCard)).to.have.lengthOf(1);
  });
});
