import { Button, Card, CardHeader, CardContent, CardFooter, Tag } from '../components';

export const CardDemo = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-xl font-bold text-text-main mb-6">🃏 카드 컴포넌트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="font-bold text-text-main">제주 바다 투어</h3>
            <p className="text-sm text-text-subtle">제주시 해안가</p>
          </CardHeader>
          <CardContent>
            <p className="text-text-main mb-3">푸른 바다와 함께하는 힐링 여행을 떠나보세요.</p>
            <div className="flex flex-wrap gap-1">
              <Tag variant="primary">#바다</Tag>
              <Tag variant="accent">#힐링</Tag>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">
              예약하기
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold text-text-main">하늘길 산책</h3>
            <p className="text-sm text-text-subtle">강원도 설악산</p>
          </CardHeader>
          <CardContent>
            <p className="text-text-main mb-3">맑은 하늘 아래 자연과 함께하는 트레킹 코스입니다.</p>
            <div className="flex flex-wrap gap-1">
              <Tag variant="secondary">#하늘</Tag>
              <Tag variant="default">#트레킹</Tag>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" size="sm">
              자세히 보기
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold text-text-main">물결 카페</h3>
            <p className="text-sm text-text-subtle">부산 해운대</p>
          </CardHeader>
          <CardContent>
            <p className="text-text-main mb-3">바다를 바라보며 즐기는 특별한 카페 체험.</p>
            <div className="flex flex-wrap gap-1">
              <Tag variant="accent">#카페</Tag>
              <Tag variant="primary">#오션뷰</Tag>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="cta" size="sm">
              지금 방문
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
