import InstallableControllerContainer from "@widgets/component/ui/InstallableControllerContainer";
import PromptArgsControllerContainer from "@widgets/component/ui/PromptArgsControllerContainer";

const ComponentPage = () => {
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
      <InstallableControllerContainer />
      <div className="page-divider" />
      <section id="prompt" className="page-subtitle linkable">
        Promopt Metadata
      </section>
      <div className="page-description">
        프롬프트 추천 정확도를 높이기 위해 각 컴포넌트의{" "}
        <span className="page-emphasized-keyword">Intent</span>,
        <span className="page-emphasized-keyword">Semantic Role</span>,
        <span className="page-emphasized-keyword">Layout Hint</span>값을
        설정합니다.
      </div>
      <PromptArgsControllerContainer />
    </div>
  );
};
export default ComponentPage;
