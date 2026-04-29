import './skeleton.scss';

export function TopicCardSkeleton() {
  return (
    <div className="sk-topic-card">
      <div className="sk sk-topic-icon" />
      <div className="sk sk-topic-name" />
      <div className="sk sk-topic-count" />
      <div className="sk sk-topic-bar" />
      <div className="sk sk-topic-prog" />
    </div>
  );
}

export function ChallengeRowSkeleton() {
  return (
    <div className="sk-challenge-row">
      <div className="sk sk-ch-icon" />
      <div className="sk-ch-info">
        <div className="sk sk-line sk-line--title" />
        <div className="sk sk-line sk-line--meta" />
      </div>
      <div className="sk sk-ch-reward" />
      <div className="sk sk-ch-status" />
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="sk-stat-card">
      <div className="sk sk-stat-label" />
      <div className="sk sk-stat-val" />
      <div className="sk sk-stat-sub" />
      <div className="sk sk-stat-bar" />
    </div>
  );
}

export function SubtopicRowSkeleton() {
  return (
    <div className="sk-subtopic-row">
      <div className="sk sk-st-num" />
      <div className="sk-st-info">
        <div className="sk sk-line sk-line--title" />
        <div className="sk sk-line sk-line--meta" />
      </div>
      <div className="sk sk-st-bar" />
      <div className="sk sk-st-status" />
    </div>
  );
}

export function ChallengePreviewSkeleton() {
  return (
    <div className="cp-screen cp-screen-preview">
      <div className="sk-preview-card">
        <div className="sk-preview-top">
          <div className="sk sk-eyebrow" />
          <div className="sk sk-title" />
          <div className="sk sk-desc-1" />
          <div className="sk sk-desc-2" />
        </div>
        <div className="sk-preview-meta">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="sk-preview-meta-item">
              <div className="sk sk-meta-lbl" />
              <div className="sk sk-meta-val" />
            </div>
          ))}
        </div>
        <div className="sk-preview-actions">
          <div className="sk sk-btn-main" />
          <div className="sk sk-btn-sub" />
        </div>
      </div>
    </div>
  );
}
