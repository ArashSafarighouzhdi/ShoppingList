import { Box, Container, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const AboutPage = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Box sx={{ mt: 4, mb: 6, px: { xs: 2, sm: 0 } }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Why I made this APP?
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 3,
          }}
        >
          A long time ago, I used to write my shopping lists on a piece of
          paper.
          <br />
          But when I was at the store, it was hard to always carry a pen to
          cross things off.
          <br />
          Plus, the items in the store are never in the same order as your
          written list. <br />
          Sometimes, I even had to visit multiple stores to finish my shopping,
          which made the paper list even messier.
          <br />
          Later, I tried sending the list to myself on messengers like WhatsApp
          or Telegram. <br />
          While shopping, I always had to keep the message in "edit mode" to
          update it, which was not convenient at all.
          <br />
          That is exactly why I built this app. I wanted to solve all these
          everyday frustrations and create a simple, intuitive tool that makes
          shopping organized, seamless, and completely hassle-free.
          <br />
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Link
            href="https://safariarash.dev"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#08047e",
            }}
          >
            <LanguageIcon fontSize="small" />
            safariarash.dev
          </Link>

          <Link
            href="https://github.com/ArashSafarighouzhdi"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/safariarash"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#0077b5",
            }}
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutPage;
