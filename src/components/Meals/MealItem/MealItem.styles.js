import styled from "styled-components";

export const MealListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    h3 {
        margin: 0 0 0.25rem 0;
    }
`;

export const MealItemDescription = styled.div`
    font-style: italic;
`;

export const MealItemPrice = styled.div`
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
`;