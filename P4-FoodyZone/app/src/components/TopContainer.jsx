import styled from "styled-components";

const TopContainer = ({ searchFood }) => {
  return (
    <TopC>
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="search">
        <input placeholder="Search Food...." onChange={searchFood} />
      </div>
    </TopC>
  );
};

export default TopContainer;

const TopC = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  padding: 16px;

  .search {
    input {
      height: 40px;
      width: calc(285px - 16px);
      background-color: transparent;
      color: white;
      font-size: 16px;
      border: 1px solid red;
      border-radius: 5px;
      padding: 0 10px;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
