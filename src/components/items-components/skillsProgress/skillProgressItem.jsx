function SkillProgressItem({data}) {
  return (
    <>
    <div className="progress-head">{data.skillName}</div>
      <progress id="progress" value={data.progressValue} max="100"></progress>
      <br />
    </>
  )
}

export default SkillProgressItem
