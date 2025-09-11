import useGetComponentOperationStatus from "@entities/component/api/useGetComponentOperationStatus";

const ComponentPage = () => {
  const { data, isLoading } = useGetComponentOperationStatus();

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Component Overview</h1>
      </header>
      <div className="page-divider" />
      <section id="operation-status" className="page-subtitle linkable">
        Operation Status
      </section>
      <div className="page-description">
        서버에서 전달받은{" "}
        <span className="page-emphasized-keyword">installable</span> 컴포넌트
        목록을 확인하고, 각 항목의 사용 가능 여부를 토글로 제어할 수 있는 설정
        영역입니다.
      </div>
      <div className="page-content">
        {!isLoading ? JSON.stringify(data, null, 2) : null}
      </div>
      <div className="page-divider" />
    </div>
  );
};
export default ComponentPage;
