import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardKajian from "../Components/CardKajian";

export default class ItemSlide extends Component {
  state = {
    activeItemIndex: 0,
  };

  setActiveItemIndex = (x) => {
    this.setState({
      activeItemIndex: x,
    });
  };

  render() {
    return (
      <div style={this.props.style}>
        <ItemsCarousel
          requestToChangeActive={this.setActiveItemIndex}
          activeItemIndex={this.state.activeItemIndex}
          numberOfCards={this.props.number}
          gutter={20}
          leftChevron={
            <h2>
              <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
            </h2>
          }
          rightChevron={
            <h2>
              <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
            </h2>
          }
          outsideChevron
          chevronWidth={40}
        >
          {this.props.data.map((data) => {
            return (
              <CardKajian
                fetchContent={this.props.fetchContent}
                key={data.id}
                data={data}
              ></CardKajian>
            );
          })}
        </ItemsCarousel>
      </div>
    );
  }
}
