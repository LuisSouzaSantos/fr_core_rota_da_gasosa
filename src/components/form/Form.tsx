import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function Form({isOpen, id, name, visible, onSave, onEdit, onClose}: any) {
  
    const [formName, setFormName] = React.useState<string>(name);
    const [formVisible, setFormVisible] = React.useState<boolean>(visible);

    const handleName = (event: any) => {
      setFormName(event.target.value);
    };

    const handleVisible = (event: any) => {
      setFormVisible(!formVisible);
    };

    const header = {
      textAlign: 'center'
    }

    const style = {
      borderRadius: '20px',
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };

    const inputText = {
      width: 300,
      height: 40
    }

    const inputCheckbox = {
      width: 25,
      height: 25,
      border: '2px solid #000000'
    }

    const footerContainer = {
      display: "flex",
      justifyContent: "space-between"
    }

    const buttonClose = {
      width: 100,
      height: 40,
      borderRadius: '10px',
      backgroundColor: '#E74C3C',
      color: '#FFFFFF',
      border: '2px solid #FFFFFF'
    }

    const buttonConfirm = {
      width: 100,
      height: 40,
      borderRadius: '10px',
      backgroundColor: '#5BE695',
      color: '#FFFFFF',
      border: '2px solid #FFFFFF'
    }

    return (
      <div>
          <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <label>Nome:</label>
              <input type='text' onChange={handleName} defaultValue={name} style={inputText}></input>
              <label>Visível:</label>
              <input type="checkbox" checked={formVisible} onChange={handleVisible} style={inputCheckbox}></input>
              <div style={footerContainer}>
                <button style={buttonClose} onClick={onClose}>Fechar</button>

                <button style={buttonConfirm} onClick={(e) => id ? onEdit(e, id, formName, formVisible): onSave(e, formName, formVisible)}>{id ? 'Editar' : 'Salvar'}</button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );

}

export default Form;