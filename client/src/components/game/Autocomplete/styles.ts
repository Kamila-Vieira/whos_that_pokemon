import styled from "styled-components";

export const Container = styled.div`
  margin-right: 10px;
`;

export const InputAutocomplete = styled.input`
  height: 42px;
  border: 1px solid #990000;

  border-radius: 5px;
  padding: 0 11px;
  font-size: 14px;
`;

export const ContainerSuggestions = styled.div`
  position: relative;
`;

export const Suggestions = styled.ul`
  background-color: #fff;
  position: absolute;
  width: 100%;
  border-radius: 0 0 5px 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  max-height: 200px;
  overflow-y: auto;

  scrollbar-width: 5px;
  scrollbar-color: #990000 rgba(50, 50, 50, 0.22);
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(50, 50, 50, 0.22);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #990000;
    border-radius: 100px;
  }
`;

export const Suggestion = styled.li<{ isActive?: boolean }>`
  padding: 5px 10px;

  background-color: ${({ isActive }) =>
    isActive ? "#ff000050" : "transparent"};

  text-transform: capitalize;

  font-size: 14px;

  cursor: pointer;
`;

export const NoSuggestions = styled.p`
  position: absolute;
  display: block;
  width: 100%;
  background-color: #fff;
  padding: 5px 10px;
`;
