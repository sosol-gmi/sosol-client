import React from 'react'
import styled from 'styled-components';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const VideoBoxWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 0 0.75rem;
  position: relative;

  > video {
    width: 100%;
    cursor: pointer;
  }
}
`;

interface Gif {
  id: string,
  fixedHeightUrl: string,
  originalUrl: string,
  title: string,
}

interface videoProps {
  gif: Gif;
  onClose?: (() => void) | undefined,
}

export const Video: React.FC<videoProps> = ({ gif, onClose }) => {
  const { fixedHeightUrl, title } = gif;

  const handleVideoPlayerClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause();
  }

  return (
    <VideoBoxWrapper>
      {onClose && (
        <Box sx={{
          position: "absolute",
          left: "3%",
          top: "3%",
          padding: "5px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.7)",
          lineHeight: "1.5",
          fontSize: "14px",
          zIndex: "99",
          '&:hover': {
            background: "rgba(0, 0, 0, 0.57)",
          }
        }}>
          <IconButton onClick={onClose} aria-label="close" size="medium">
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <video
        onClick={e => handleVideoPlayerClick(e)}
        preload="auto"
        autoPlay={true}
        muted={true}
        loop={true}
        aria-label={title}
        src={fixedHeightUrl}
      >
      </video>
      <Box sx={{
        position: "absolute",
        left: "3%",
        bottom: "3%",
        padding: "0 4px",
        borderRadius: "4px",
        background: "rgba(0, 0, 0, 0.77)",
        lineHeight: "1.5",
        fontSize: "14px",
      }}>
        GIF
      </Box>
    </VideoBoxWrapper >
  );
}
