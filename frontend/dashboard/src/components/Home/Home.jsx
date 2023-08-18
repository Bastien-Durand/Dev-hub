import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarListen,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Card variant="outlined">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <CardContent>
            <Typography
              level="title-md"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Web development
            </Typography>
            <Typography>
              The basics of building beautiful applications. Front to Back and
              other services.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" />
          <CardContent>
            <Typography
              level="title-md"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Web3
            </Typography>
            <Typography>
              Learn about web3 technologies utilised by developers to build and
              scale web3 products.
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <FontAwesomeIcon icon={faEarListen} size="3x" />
          <CardContent>
            <Typography
              level="title-md"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              What is the internet?
            </Typography>
            <Typography>
              Learn about the internet and a worldwide system of computer
              networks.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
