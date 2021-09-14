import { DateTime } from "luxon";

import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";

import { JobType } from "../Layout";

const StyledUl = styled("ul")(({ theme: { spacing } }) => ({
  margin: 0,
  padding: spacing(0, 0, 0, 4),
}));

const Layout = styled("div")(({ theme: { spacing } }) => ({
  margin: spacing(0, 0, 6, 0),
}));

const Section = styled("section")({
  pageBreakInside: "avoid",
});

const Subtitle = styled(Typography)(({ theme: { spacing } }) => ({
  margin: spacing(0.5, 0, 2, 0),
}));

const Job = ({
  title,
  company,
  team,
  startDate,
  endDate,
  description,
  duties,
  achievements,
}: JobType) => {
  const startDateFormatted = DateTime.fromISO(startDate).toFormat("LLLL y");
  const endDateFormatted = endDate
    ? DateTime.fromISO(endDate).toFormat("LLLL y")
    : null;

  return (
    <Layout>
      <Section>
        <Typography>
          <b>{title}</b> - <i>{company}</i>
        </Typography>
        <Subtitle variant="subtitle2">
          {team ? team + ", " : ""}
          {startDate === endDate
            ? startDateFormatted
            : `${startDateFormatted} to ${
                endDateFormatted ? endDateFormatted : "present"
              }`}
        </Subtitle>
        <Typography>{description}</Typography>
      </Section>
      <Section>
        <Typography variant="subtitle1">Key Duties</Typography>
        <StyledUl>
          {duties.map((duty) => (
            <li>{duty}</li>
          ))}
        </StyledUl>
      </Section>
      <Section>
        <Typography variant="subtitle1">Key Achievements</Typography>
        <StyledUl>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </StyledUl>
      </Section>
    </Layout>
  );
};

export default Job;
