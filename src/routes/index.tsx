import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Earth, Rocket, Navigation, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

const locations = [
  {
    id: 1,
    name: "제주 한화 우주센터",
    address: "제주 서귀포시 1100로 506-2 (옛 탐라대 부지 내)",
    description: `-3만㎡ 부지에 연면적 1만1400㎡ 규모로 건설됨.  제주해군기지에서 차량으로 15분 거리에 위치
-저궤도로 발사될 소형 SAR (합성개구레이다) 위성 개발 및 제조, 수출까지 염두에 두고 한 달 4-8기 위성을 생산 한다
-연간 최대 100기 위성을 생산할 예정. 한화 시스템은 옛 탐라대 부지에 추진되고 있는 하원 테크노 캠퍼스 사업의 주축 기업이자 제주도정이 ‘미래먹거리’ 산업으로 내세우는 제주우주산업의 중심 기업이다
-한화시스템은 제주우주센터를 중심으로 위성제작뿐만 아니라 발사, 관제 및  AI  영상 분석까지 아우른다는 구상을 하고 있다`,
    links: ["https://www.hanwha.co.kr/newsroom/media_center/news/article.do?seq=15429"],
    images: ["https://www.hanwha.co.kr/upload/news/press/2025/12/02/1764642235044_71.jpg"],
    lng: 126.505,
    lat: 33.3005,
  },
];
const JEJU = {
  lnglat: [126.5666, 33.5666],
};

const DAEJEON = {
  lnglat: [127.3845, 36.3504],
};

function App() {
  return (
    <main>
      <header className="p-4 flex items-center gap-2 text-green-600">
        <Earth />
        <h1 className="font-bold text-xl">열린 우주 방산 지도</h1>
      </header>

      <div className="h-[850px] w-full">
        <Map center={DAEJEON.lnglat} zoom={6}>
          <MapControls position="top-right" showZoom showCompass showLocate showFullscreen />
          {locations.map((location) => (
            <MapMarker key={location.id} longitude={location.lng} latitude={location.lat}>
              <MarkerContent>
                <div className="flex flex-col items-center align-center relative w-32">
                  <div className="absolute -top-4 bg-white/70 rounded px-1">{location.name}</div>
                  <Rocket />
                </div>
              </MarkerContent>
              <MarkerPopup className="max-w-84 p-0">
                <img
                  src={location.images[0]}
                  className="relative w-full h-42 overflow-hidden rounded-t-md object-cover"
                />
                <div className="space-y-2 p-3">
                  <p className="text-lg font-bold">{location.name}</p>
                  <p className="whitespace-pre-wrap">{location.description}</p>
                  <div className="flex gap-2 pt-1">
                    <Button asChild size="sm" className="flex-1">
                      <a className="flex items-center justify-center gap-2 w-full" href={location.links[0]} target="_blank">
                      <Navigation className="size-3.5" />
                      자세히보기
                      </a>
                    </Button>
                  </div>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>
      </div>
    </main>
  );
}
