export default function UpdateDate({ yyyymmdd }) {
  return (
    <div className='update-date' style={{ textAlign: "right" }}>
      업데이트 날짜 : {YYYY_MM_DD(yyyymmdd)}
    </div>
  );
}

function YYYY_MM_DD(yyyymmdd) {
  return `${yyyymmdd.slice(0, 4)}.${yyyymmdd.slice(4, 6)}.${yyyymmdd.slice(6, 8)}`;
}
