import { useState } from 'react';
import { Button, Input } from '../components';

export const InputDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputError) setInputError('');
  };

  const handleValidation = () => {
    if (!inputValue.trim()) {
      setInputError('이 필드는 필수입니다.');
    } else {
      setInputError('');
      alert(`입력된 값: ${inputValue}`);
    }
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-xl font-bold text-text-main mb-6">📝 입력 필드</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Input
            label="여행지 검색"
            placeholder="어디로 떠나시겠어요?"
            helperText="예: 제주도, 부산, 강릉"
          />
          <Input
            label="유효성 검사 테스트"
            value={inputValue}
            onChange={handleInputChange}
            error={inputError}
            placeholder="아무 값이나 입력해보세요"
          />
          <Button variant="primary" onClick={handleValidation}>
            검사하기
          </Button>
        </div>
        <div className="space-y-4">
          <Input type="email" label="이메일 주소" placeholder="travel@example.com" />
          <Input label="비활성화됨" value="수정 불가" disabled />
        </div>
      </div>
    </section>
  );
};
