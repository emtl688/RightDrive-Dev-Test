import { Box } from "@mui/system"
import { LinkedIn, GitHub, FileDownload } from "@mui/icons-material"
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <Box className="header">
        <h1 style={{ margin: "0.35em" }}>RightDrive Dev Test</h1>
        <Box className="aboutDev">
            <span style={{paddingBottom: "5px"}}>By: &nbsp;Eric Moran</span>
            <Link href="https://drive.google.com/file/d/1P0HvHcryhS3ui01TgMAN5P7dsbS1pSL2/view?usp=sharing" target="_blank">
                <FileDownload />
            </Link>
            <Link href="https://www.linkedin.com/in/ericpmoran/" target="_blank">
                <LinkedIn />
            </Link>
            <Link href="https://github.com/emtl688" target="_blank">
                <GitHub />
            </Link>
        </Box>
    </Box>
    
  )
}

export default Header