import styled from 'styled-components';

export const PageCreateOrphanage = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`;

export const PageCreateOrphanageForm = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: ${props => props.theme.colors.background};
    font-weight: 700;

    border-bottom: 0.5px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 20px;
  }
`;

export const InputBlock = styled.div`
  

  label {
    color: ${props => props.theme.colors.background};
  }

  label span {
    font-size: 14px;
    color: ${props => props.theme.colors.background};
    margin-left: 24px;
    line-height: 24px;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  input[type="file"] {
    display: none;
  }
`;

export const ImagesContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  div img {
    width: 100%auto;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  div {
    position: relative;
  }

  div button {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 0 20px 0 20px;
    border: 2px solid #D3E1E5;

    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
`;

export const NewImage = styled.label`
    height: 96px;
    background: #F5F8FA;
    border: 1px dashed #96D2F0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonSelect = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
        height: 64px;
        background: #F5F8FA;
        border: 1px solid #D3E2E5;
        color: #5C8599;
        cursor: pointer;
    }

    button:first-child {
        border-radius: 20px 0px 0px 20px;
    }

    button:last-child {
        border-radius: 0 20px 20px 0;
        border-left: 0;
    }
`

export const Active = styled.button`
    background: #EDFFF6;
    border: 1px solid #A1E9C5;
    color: #37C77F;
`

export const ConfirmButton = styled.button`
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: ${props => props.theme.colors.background};
    border-radius: 20px;
    color: ${props => props.theme.colors.textColor};
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    svg {
        margin-right: 16px;
    }

    &:hover {
        background: #36CF82;
    }
`

export const DeleteButton = styled.button`
  border-radius: 20px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  
`
