import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../elem/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../config/module/modal";
import { useQuery } from "react-query";
import { getCategorys } from "../../api/posts";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useQuery("categorys", getCategorys);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  const showCreateModal = () => {
    dispatch(openModal({ type: "createCategory" }));
  };

  const showDeleteModal = (id) => {
    dispatch(openModal({ type: "deleteCategory", id }));
  };

  return (
    <StSidebar>
      <SidebarTitle>{`//CATEGORY`}</SidebarTitle>
      <CategoryBox>
        <StCategory to="/">{`<li HOME/>`}</StCategory>
        {data.map((e) => (
          <CategoryList key={e.id}>
            <StCategory to={`/category/${e.category}`}>
              {`<li ${e.category}/>`}
            </StCategory>
            <Button size="small" onClick={() => showDeleteModal(e.id)}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.18471 0L0 7.18471L3.66879 10.8535L12.7389 20.0764L3.66879 29.1465L0 32.6624L7.18471 40L10.8535 36.3312L20.0764 27.1083L29.1465 36.3312L32.6624 40L40 32.6624L36.3312 29.1465L27.1083 20.0764L36.3312 10.8535L40 7.18471L32.6624 0L29.1465 3.66879L20.0764 12.7389L10.8535 3.66879L7.18471 0Z"
                  fill="#2FF40A"
                />
              </svg>
            </Button>
          </CategoryList>
        ))}

        <Button size="large" onClick={showCreateModal}>
          +
        </Button>
      </CategoryBox>
      <WriteBtn
        size="large"
        border="true"
        onClick={() => navigate("/write")}
      >{`//WRITE`}</WriteBtn>
    </StSidebar>
  );
};

//사이드바
const StSidebar = styled.aside`
  border-right: 2px solid #2ff40a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SidebarTitle = styled.div`
  font-size: 37px;
  padding: 20px;
`;
const CategoryBox = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid #2ff40a;
  width: 220px;
  max-height: 492px;
  padding: 15px 10px 15px 15px;
  gap: 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #2ff40a;
    background-color: #2ff40a;
  }
`;
const CategoryList = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StCategory = styled(Link)`
  font-size: x-large;
  text-decoration: none;
`;

const WriteBtn = styled(Button)`
  position: sticky;
  top: 83%;
`;

export default Sidebar;
