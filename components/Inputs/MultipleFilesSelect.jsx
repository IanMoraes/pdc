import { Box, Button, Grid, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";
import BackspaceIcon from "@mui/icons-material/Backspace";
function MultipleFilesSelect({ options, name, maxFiles }) {
    console.log(name);
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 1 }} direction="row">
                <Grid item md={4} xs={6} sx={{ textAlign: "center" }}>
                    <SelectElement fullWidth label="Tipo" name="tipo" options={options} />
                </Grid>
                <Grid item md={5} xs={6} sx={{ textAlign: "center" }}>
                    <input style={{ display: "none" }} id="raised-button-file" multiple type="file" />
                    <label htmlFor="raised-button-file">
                        <Button variant="raised" component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item md={3} xs={6}>
                    <Tooltip title="Limpar">
                        <IconButton variant="contained" color="primary">
                            <BackspaceIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Adicionar">
                        <IconButton variant="contained" color="primary">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir">
                        <IconButton variant="contained" color="primary">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    );
}

export default MultipleFilesSelect;
