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
import { Earth, Rocket, Navigation, School, Microscope, Factory, Banknote } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

const locations = [
  {
    id: 1,
    type: "rocket",
    region: "제주",
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
  {
    id: 2,
    type: "factory",
    region: "논산",
    name: "㈜코리아디펜스인더스트리(KDind)",
    address: "충남 논산시 양촌면 매죽헌로 1514-46",
    description:
      "-천무체계 등 분산탄 및 신관산업 중심 전문 방산업체\n-(주)한화 방산 분산탄 분야 물적분할 후 완전매각",
    links: ["https://www.koreadefenseindustry.com/home/main.do?screenTp=USER"],
    images: [
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1KVR4y.img?w=534&h=305&m=6",
    ],
    lat: 36.1267082399582,
    lng: 127.227970538755,
  },
  {
    id: 3,
    type: "office",
    region: "서울",
    name: "한화에어로스페이스 서울 본사",
    address: "서울시 중구 청계천로 86 한화빌딩 12층",
    description: "경영지원 ・ 국내/해외 사업",
    lat: 37.5675213832268,
    lng: 126.986526801038,
  },
  {
    id: 4,
    type: "lab",
    region: "판교 (경기도 성남)",
    name: "한화에어로스페이스 판교 R&D 캠퍼스",
    address: "경기도 성남시 분당구 판교로 319번길 6",
    description: "항공엔진 (터보팬 등) ・ 유무인복합체계 ・ 전기추진체계",
    lat: 37.4045985122175,
    lng: 127.109906459348,
  },
  {
    id: 5,
    type: "office",
    region: "경기도 양주",
    name: "한화에어로스페이스 양주 CS 센터",
    address: "경기도 양주시 백석읍 꿈나무로 108",
    description: "지상장비(자주포/장갑차) 고객지원(정비, 납품/후송)",
    lat: 37.7990610333626,
    lng: 126.99263950957,
  },
  {
    id: 6,
    type: "factory",
    region: "대전",
    name: "한화에어로스페이스 대전사업장",
    address: "대전 유성구 외삼로 8번길 99",
    description: "-대형추진기관 개발/생산 ・ 추진제 혼화/충전 ・ 전술지대지 체계개발/생산",
    lat: 36.401786946183,
    lng: 127.328238705854,
  },
  {
    id: 7,
    type: "lab",
    region: "대전",
    name: "한화에어로스페이스 대전R&D캠퍼스",
    address: "대전 유성구 유성대로1366번길 10",
    description:
      "-2024년 기준 한화에어로스페이스 대전 R&D 캠퍼스는 발사체 전 분야의 개발 수행이 가능한 국내 유일의 발사체 개발센터\n-차세대 전술/전략 유도무기 및 탄약체계 개발 ・ 유도조종/구동제어/탄두/고에너지물질/신관기술 연구 ・ 누리호 고도화",
    lat: 36.4031702516163,
    lng: 127.367290925198,
  },
  {
    id: 8,
    type: "factory",
    region: "충북 보은",
    name: "한화에어로스페이스 보은 사업장",
    address: "충북 보은군 내북면 회인내북로 857",
    description: "정밀유도/대형추진체계 생산 ・ 추진제 혼화/충전, 탄약 및 신관 생산",
    lat: 36.566509,
    lng: 127.6357939,
  },
  {
    id: 9,
    type: "factory",
    region: "충남 아산",
    name: "한화에어로스페이스 아산 사업장",
    address: "충청남도 아산시 아산밸리남로 144",
    description: "항공기계 (KF-21, T/FA-50, 수리온) ・ 유도무기 구동장치, 연료계통 부품",
    lat: 36.9148825379439,
    lng: 127.062280219501,
  },
  {
    id: 10,
    type: "factory",
    region: "경남 창원",
    name: "한화에어로스페이스 창원 1사업장/한국사업장",
    address: "경상남도 창원시 성산구 창원대로 1204",
    description: "항공기 엔진 및 부품, KSLV 엔진, 추진기관 생산",
    lat: 35.1914012,
    lng: 128.7131017,
  },
  {
    id: 11,
    type: "factory",
    region: "경남 창원",
    name: "한화에어로스페이스 창원 2사업장",
    address: "경상남도 창원시 성산구 공단로 799",
    description: "기동체계 (K21 등), 발사체계, 대공체계, 화생방체계 생산",
    lat: 35.1855656597405,
    lng: 128.699556299844,
  },
  {
    id: 12,
    type: "factory",
    region: "경남 창원",
    name: "한화에어로스페이스 창원 3사업장 / R&D 캠퍼스",
    address: "경상남도 창원시 성산구 공단로 69",
    description: "화력체계, 기동체계, 발사체계, 수상체계 연구/개발 및 ESS 생산",
    lat: 35.2133040721897,
    lng: 128.632258778051,
  },
  {
    id: 13,
    type: "factory",
    region: "전남 여수",
    name: "한화에어로스페이스 여수 사업장",
    address: "전남 여수시 신월로 411",
    description: "화포추진제 개발/생산 ・ 고폭약/화공품/원료 생산",
    lat: 34.728599861521,
    lng: 127.695531691002,
  },
  {
    id: 14,
    type: "office",
    region: "서울",
    name: "한화시스템 서울사업장 1",
    address: "서울시 중구 청계천로 86 한화빌딩 14층",
    description: "경영지원 / DE사업부 / MRO사업부 / 해양사업부(SmartVessel) / 우주사업총괄",
    lat: 37.5675213832268,
    lng: 126.986526801038,
  },

  {
    id: 15,
    type: "office",
    region: "서울",
    name: "한화시스템 서울사업장 2",
    address: "서울시 중구 을지로 100 파인에비뉴 A동",
    description: "경영지원 / DE사업부 / MRO사업부 / 해양사업부(SmartVessel) / 우주사업총괄",
    lat: 37.5656490167105,
    lng: 126.988142568678,
  },
  {
    id: 16,
    type: "lab",
    region: "판교 (경기도 성남)",
    name: "한화시스템 판교연구소",
    address: "경기도 성남시 분당구 판교역로 188 2-13층",
    description: "• DE사업부(통신연구소, 지상연구소, 전자광학연구소) / 기반연구소",
    lat: 37.3974583,
    lng: 127.110048,
  },
  {
    id: 17,
    type: "lab",
    region: "서현 (경기도 성남)",
    name: "한화시스템 서현사업장",
    address: "경기도 성남시 분당구 황새울로 360번길 273-5층",
    description: "DE사업부(전자광학연구소), 우주사업총괄(우주연구소)",
    lat: 37.3854983,
    lng: 127.1246136,
  },
  {
    id: 18,
    type: "lab",
    region: "경기 용인",
    name: "한화시스템 용인종합연구소",
    address: "경기도 용인시 처인구 남사읍 경기동로 491-23",
    description: "DE사업부(레이다연구소) / 우주사업총괄(우주연구소)",
    lat: 37.1434847004267,
    lng: 127.179582171271,
  },
  {
    id: 19,
    type: "office",
    region: "경북 구미",
    name: "한화시스템 구미사업장",
    address: "경상북도 구미시 산호대로 264-60",
    description: "해양사업부(해양연구소) / MRO사업부 / 생산기술",
    lat: 36.1067692567873,
    lng: 128.392394022284,
  },
];

const DAEJEON = {
  lnglat: [127.3845, 36.3504] as [number, number],
};

function App() {
  return (
    <main>
      <header className="p-4 flex items-center gap-2 text-green-600">
        <Earth />
        <h1 className="font-bold text-xl">열린 우주 방산 지도</h1>
      </header>

      <div className="h-212 w-full">
        <Map center={DAEJEON.lnglat} zoom={6}>
          <MapControls position="top-right" showZoom showCompass showLocate showFullscreen />
          {locations.map((location) => (
            <MapMarker key={location.id} longitude={location.lng} latitude={location.lat}>
              <MarkerContent>
                {location.type === "rocket" ? (
                  <Rocket className="w-4 h-4" />
                ) : location.type === "office" ? (
                  <Banknote className="w-4 h-4" />
                ) : location.type === "lab" ? (
                  <Microscope className="w-4 h-4" />
                ) : location.type === "factory" ? (
                  <Factory className="w-4 h-4" />
                ) : (
                  <Rocket className="w-4 h-4" />
                )}
              </MarkerContent>
              <MarkerTooltip>{location.name}</MarkerTooltip>
              <MarkerPopup className="max-w-84 p-0">
                {location.images && (
                  <img
                    src={location.images[0]}
                    className="relative w-full h-42 overflow-hidden rounded-t-md object-cover"
                  />
                )}
                <div className="space-y-2 p-3">
                  <p className="text-lg font-bold">{location.name}</p>
                  <p className="text-gray-500">{location.address}</p>
                  <p className="whitespace-pre-wrap text-xs/5">{location.description}</p>
                  {location.links && (
                    <div className="flex gap-2 pt-1">
                      <Button
                        nativeButton={false}
                        render={
                          <a href={location.links[0]} target="_blank">
                            <Navigation className="size-3.5" />
                            자세히보기
                          </a>
                        }
                        size="sm"
                        className="flex-1"
                      ></Button>
                    </div>
                  )}
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>
      </div>
    </main>
  );
}
