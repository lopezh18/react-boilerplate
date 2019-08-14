import styled from 'styled-components';

// import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  background: ${props => (props.search ? 'palevioletred' : 'white')};
`;
// ${buttonStyles};

export default StyledButton;
