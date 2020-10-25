import React from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import { setColor, media, setRem } from "../../styles";
function Rooms() {
  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};

  /* ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `}; */
`;

export default Rooms;
