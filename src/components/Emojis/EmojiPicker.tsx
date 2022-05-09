import { useState, useContext } from "react";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Picker } from "emoji-mart";
import { ThemeContext } from "../../contexts/theme";
import "emoji-mart/css/emoji-mart.css";
import { styled } from "@mui/material/styles";
import { Box, Modal } from "@mui/material";

const PickerWrapper = styled(Box)((props: any) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  ".emoji-mart-bar svg,.emoji-mart-bar svg path": {
    fill: props.theme.accentColor,
  },
  ".emoji-mart .emoji-mart-anchor-bar": {
    backgroundColor: `${props.theme.accentColor} !important`,
  },
  ".emoji-mart-preview": {
    display: "none",
  },
  ".emoji-mart-dark": {
    borderColor: props.theme.secondaryColor,
    backgroundColor: props.theme.background,
  },
  ".emoji-mart-dark .emoji-mart-category-label span": {
    backgroundColor: props.theme.background,
    color: "#fff",
  },
  ".emoji-mart-scroll::WebkitScrollbar": {
    width: "0.25rem",
  },
  ".emoji-mart-scroll::WebkitScrollbarTrack": {
    background: props.theme.background,
  },
  ".emoji-mart-scroll::WebkitScrollbarThumb": {
    background: props.theme.accentColor,
  },
}));

const PickerIcon = styled('span')((props: any) => ({
  cursor: "pointer",
  "& svg path": {
    fill: props.theme.secondaryColor,
  },
  "&:hover svg path": {
    fill: props.theme.accentColor,
  },
}));

interface EmojiPickerProps {
  emojiHandler?: any;
  customIcon?: any;
  dismissOnClick?: any;
  props?: any;
}

export const EmojiPicker = ({
  emojiHandler,
  customIcon,
  dismissOnClick,
}: EmojiPickerProps) => {
  const [picker, togglePicker] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleEmojiSelect = (pickedEmoji: any) => {
    emojiHandler(pickedEmoji);
    if (dismissOnClick) togglePicker(false);
  };

  return (
    <Box>
      <PickerIcon onClick={() => togglePicker(true)}>
        {customIcon ?? <InsertEmoticonIcon />}
      </PickerIcon>
      <Modal
        open={picker}
        onClose={() => togglePicker(false)}
        aria-labelledby="Emoji picker"
        aria-describedby="Pick and emoji for tweet"
      >
        {/* here change `button` to `useButton` bcz we need to add button props in node modules picker file*/}
        <PickerWrapper>
          {picker && (
            <Picker
              useButton={true}
              sheetSize={64}
              theme={theme.background === "#15202b" ? "dark" : "light"}
              onSelect={handleEmojiSelect}
            />
          )}
        </PickerWrapper>
      </Modal>
    </Box>
  );
};
