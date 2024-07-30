import React from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, Button, IconButton } from "@mui/material";
import ChevronDownIcon from "@mui/icons-material/ExpandMore";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocaleChange = (locale) => {
    i18n.changeLanguage(locale);
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ChevronDownIcon />}
      >
        {i18n.language === "en" ? "EN" : "AR"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLocaleChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLocaleChange("ar")}>العربية</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
