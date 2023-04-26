import { Link } from 'react-router-dom';
import { List, Item } from './Pagination.styled';
import styled from '@emotion/styled';

export const Paginations = ({ usersPurPages, users, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPurPages); i++) {
    pageNumbers.push(i);
  }

  const StyledLink = styled(Link)`
    &:hover {
      background-color: violet;
    }
  `;

  return (
    <List>
      {pageNumbers.map(number => (
        <Item key={number}>
          <StyledLink
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '11px 16px',
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};
