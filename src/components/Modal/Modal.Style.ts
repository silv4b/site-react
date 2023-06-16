import styled from "styled-components";

const Background = styled.div`
  transition: 0.9s ease-in-out;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  position: absolute;
  padding: 2rem;
  color: rgb(255, 255, 255);
  background: rgb(28, 28, 28);
  min-width: 16rem;
  border-radius: 8px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
  overflow: auto;
  transition: 0.9s ease-in-out;
  left: 50%;
  top: 456px;
  transform: translate(-50%, -50%);
  z-index: 11 !important;

  &:first-child{
    font-size: 2rem;
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlaylisImage = styled.img`
  width: 150px;
  height: 150px;
  border-style: none;
  transition: 0.2s ease-in-out;
  border-radius: 8px 0 0 8px;
`;

const PlaylisDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171717;
  border-radius: 0 8px 8px 0;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 320px;
  height: 150px;

  p {
    margin-top: 20px;
    margin-bottom: 0;
  }

  &:nth-child(2) {
    text-align: left;
    font-size: 0.9rem;
  }
`;




export {Background, ModalContent, PlaylistContainer, PlaylisImage, PlaylisDescription};