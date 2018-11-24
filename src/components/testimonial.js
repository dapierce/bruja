import React from "react";

class Testimonial extends React.Component {
  render() {
    const quotes = [
      {
        id: 1,
        quote: "This is great!",
        name: "Name of person"
      },
      {
        id: 2,
        quote: "This is also great!",
        name: "Name of person 2"
      },
      {
        id: 3,
        quote: "This is really great!",
        name: "Name of person 3"
      }
    ]

    return (
      <Testimonial>
        <p>{quotes[0].quote}</p>
        <p>- {quotes[0].name}</p>
      </Testimonial>
    )
  };
}

export default Testimonial;