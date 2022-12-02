/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import messenger from "assets/images/messenger.png";
import emoji from "assets/images/icons/emoji-2.png";

const data = [
    {
        title: "Why is validating important?",
        contents: (
            <div>
                Before going in and building the mvp it important to see if
                there's really the existence of demand for the particular SASS.
            </div>
        ),
    },
    {
        title: "When to build the MVP?",
        contents: (
            <div>
                Once we understand that the SASS has a need in the market then
                we can go forward towards building the version 1.0.0 MVP.
            </div>
        ),
    },
    {
        title: `What happens when the idea is failing?`,
        contents: (
            <div>
                Thats not the end of the world. We can still work on
                restructuring the idea that it serves a better purpose.
            </div>
        ),
    },
];

const PremiumFeature = () => {
    return (
        <section id="features" sx={styles.section}>
            <Container>
                <Grid sx={styles.grid}>
                    <Box as="figure" sx={styles.illustration}>
                        <Image src={messenger} alt="messenger" />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            emoji={emoji}
                            sx={styles.heading}
                            title="Meet our premium features that will make you go wow"
                            description="Build an incredible SASS that serves millions of users with their respective needs and not break"
                        />
                        <Box sx={styles.accordionGroup}>
                            <Accordion items={data} />
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </section>
    );
};

export default PremiumFeature;

const styles = {
    section: {
        pt: [6, null, null, 6, 8, 9],
        pb: [6, null, null, null, 7, 9, 11, null],
    },
    grid: {
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "1fr 431px",
            "1fr 530px",
            "1fr 550px",
        ],
    },
    heading: {
        textAlign: ["left", null, null, "center", "left"],
        ml: [null, null, null, "auto"],
        maxWidth: [null, null, null, 520, 660],
        h2: {
            fontSize: [null, null, null, 10, 8, 10, 40],
            img: {
                maxWidth: [24, null, null, 30, 25, null, "100%"],
                top: ["4px", "8px", null, null, "4px", "8px"],
            },
        },
        p: {
            fontSize: [null, null, null, 2],
        },
    },
    illustration: {
        mb: [-6, null, null, -8, 0],
    },
    accordionGroup: {
        m: [null, null, null, "0 auto", "unset"],
        maxWidth: [null, null, null, 600, "none"],
    },
};
