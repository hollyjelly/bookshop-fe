import Title from "../components/common/Title.tsx";
import Button from "../components/common/Button.tsx";

export default function Home() {
    return(
        <>
            <Title size="large" color="background">
                제목 테스트
            </Title>
            <Button size="large" scheme="primary">버튼 테스트</Button>
            <div>home body</div>
        </>
    )
}