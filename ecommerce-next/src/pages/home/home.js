import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator } from "@/components/Shared";

export default function homePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished/>

        <Separator height={100} />


        <Container>
          <Home.LatestGames title="Ultimos Lanzamientos"/>
        </Container>
        
      </BasicLayout>
    </> 
  )
}
