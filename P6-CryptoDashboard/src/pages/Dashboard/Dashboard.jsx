import { GridItem, Grid } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./Portfolio";
import PriceSection from "./PriceSection";
import Transactions from "./Transactions";
import InfoCard from "./InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Portfolio />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgURL="/dot.png"
            text="Loans
Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tagText="Loans"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgURL="/block.png"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
