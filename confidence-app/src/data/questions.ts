// Hardcoded scenario-based assessment questions (from project doc).
// Each maps to one of the five pillars. Options: A = Low, B = Moderate, C = High.

export const PILLARS = [
  'Self-Perception & Self-Worth',
  'Emotional Resilience',
  'Social Confidence & Communication',
  'Decision-Making & Risk-Taking',
  'Personal Growth & Learning Mindset',
] as const

export type PillarIndex = 0 | 1 | 2 | 3 | 4
export type AnswerValue = 'low' | 'moderate' | 'high'

export interface ScenarioQuestion {
  id: number
  pillar: PillarIndex
  scenario: string
  options: { label: string; value: AnswerValue }[]
}

export const SCENARIO_QUESTIONS: ScenarioQuestion[] = [
  // Pillar 1: Self-Perception & Self-Worth
  {
    id: 1,
    pillar: 0,
    scenario: "You're in a group with the 'smart kids' for a big school project. What's your first thought?",
    options: [
      { label: "They probably think I'm going to drag them down. I'll just agree with whatever they say.", value: 'low' },
      { label: "I'll have to work extra hard to prove I'm not dumb. I hope I don't say anything stupid.", value: 'moderate' },
      { label: "Cool, they're smart, but I have good ideas too. I'm ready to contribute.", value: 'high' },
    ],
  },
  {
    id: 2,
    pillar: 0,
    scenario: "Your friends are all into sports, but you're passionate about something different (e.g. drawing, coding). How do you feel about your hobby?",
    options: [
      { label: "I feel a bit embarrassed and avoid talking about it because it's not as 'cool'.", value: 'low' },
      { label: "I enjoy it in private but wish I were better at sports so I could fit in more.", value: 'moderate' },
      { label: "I feel proud of my talent and enjoy sharing it with people who are interested.", value: 'high' },
    ],
  },
  {
    id: 3,
    pillar: 0,
    scenario: "A classmate you admire says you have a great sense of style. How do you respond?",
    options: [
      { label: 'I say something like "No way, this is just an old shirt" and feel awkward.', value: 'low' },
      { label: "I say a quick 'thanks' but think they were probably just being polite.", value: 'moderate' },
      { label: "I smile and say, 'Thank you! I really like this outfit too.'", value: 'high' },
    ],
  },
  {
    id: 4,
    pillar: 0,
    scenario: "You get a B on a test you studied hard for; a friend got an A. What do you tell yourself?",
    options: [
      { label: "I'm just not as smart as my friend. I'll probably never be as good.", value: 'low' },
      { label: "I'm happy for my friend, but I feel pretty bad about my own grade.", value: 'moderate' },
      { label: "I'm proud of the effort I put in. I'll ask how they studied so I can learn.", value: 'high' },
    ],
  },
  {
    id: 5,
    pillar: 0,
    scenario: "Your teacher announces a science fair. You have an idea that seems complicated. What is your approach?",
    options: [
      { label: "I pick a much easier topic because I'm afraid I'll fail at the complicated one.", value: 'low' },
      { label: "I think about the challenging project but worry I don't have the skills.", value: 'moderate' },
      { label: "I feel excited by the challenge and believe that with effort I can figure it out.", value: 'high' },
    ],
  },
  // Pillar 2: Emotional Resilience
  {
    id: 6,
    pillar: 1,
    scenario: "You have a disagreement with your best friend and they're ignoring your texts. What do you do?",
    options: [
      { label: "I panic and assume the friendship is over, feeling terrible.", value: 'low' },
      { label: "I wait anxiously for them to text back, replaying the argument in my head.", value: 'moderate' },
      { label: "I give them space, then reach out to talk things over and resolve it.", value: 'high' },
    ],
  },
  {
    id: 7,
    pillar: 1,
    scenario: "You trip and fall in front of a group of people. How do you handle it?",
    options: [
      { label: "I feel so embarrassed I want to be invisible; I worry about it for days.", value: 'low' },
      { label: "I get up quickly and pretend it didn't happen, hoping no one brings it up.", value: 'moderate' },
      { label: "I laugh it off, maybe make a joke, and continue with my day.", value: 'high' },
    ],
  },
  {
    id: 8,
    pillar: 1,
    scenario: "Your parents set a new rule you think is unfair (e.g. earlier curfew). What is your reaction?",
    options: [
      { label: "I get angry and yell, or sulk in my room, feeling powerless.", value: 'low' },
      { label: "I complain to my friends but don't say anything to my parents.", value: 'moderate' },
      { label: "I wait until I'm calm and ask to have a discussion and explain my view respectfully.", value: 'high' },
    ],
  },
  {
    id: 9,
    pillar: 1,
    scenario: "During gym class you're one of the last people chosen for a team. What goes through your mind?",
    options: [
      { label: "Everyone thinks I'm bad at sports. This is humiliating.", value: 'low' },
      { label: "I wish I were more athletic so this wouldn't happen.", value: 'moderate' },
      { label: "It's just a gym class. I'll try my best and have fun.", value: 'high' },
    ],
  },
  {
    id: 10,
    pillar: 1,
    scenario: "You're struggling with a subject and it feels overwhelming. What is your plan?",
    options: [
      { label: "I give up, figuring I'm just 'bad' at that subject.", value: 'low' },
      { label: "I keep studying the same way, getting more frustrated when it doesn't work.", value: 'moderate' },
      { label: "I ask the teacher for extra help or start a study group with classmates.", value: 'high' },
    ],
  },
  // Pillar 3: Social Confidence & Communication
  {
    id: 11,
    pillar: 2,
    scenario: "The teacher asks a question; you're pretty sure you know the answer but not 100%. What do you do?",
    options: [
      { label: "I stay silent, afraid I might be wrong and people will laugh.", value: 'low' },
      { label: "I hesitate and hope the teacher calls on someone else first.", value: 'moderate' },
      { label: "I raise my hand and give it a shot, knowing it's okay if I'm not perfectly correct.", value: 'high' },
    ],
  },
  {
    id: 12,
    pillar: 2,
    scenario: "You're at a party and don't know many people. How do you feel and act?",
    options: [
      { label: "I stick to one corner or leave early; I feel too nervous to approach anyone.", value: 'low' },
      { label: "I talk to one or two people I know and avoid starting conversations with strangers.", value: 'moderate' },
      { label: "I introduce myself to a few new people and try to join conversations.", value: 'high' },
    ],
  },
  {
    id: 13,
    pillar: 2,
    scenario: "A colleague takes credit for your idea in a meeting. How do you respond?",
    options: [
      { label: "I say nothing and feel resentful; I don't want to cause conflict.", value: 'low' },
      { label: "I mention it to a friend later but don't confront the colleague.", value: 'moderate' },
      { label: "I calmly clarify my contribution in the meeting or speak to them afterward.", value: 'high' },
    ],
  },
  {
    id: 14,
    pillar: 2,
    scenario: "You need to ask your manager for a deadline extension. What do you do?",
    options: [
      { label: "I don't ask and stress to finish on time, or miss the deadline without saying anything.", value: 'low' },
      { label: "I consider asking but worry they'll think less of me.", value: 'moderate' },
      { label: "I explain the situation clearly and ask for a reasonable extension.", value: 'high' },
    ],
  },
  {
    id: 15,
    pillar: 2,
    scenario: "Someone interrupts you repeatedly in a discussion. How do you handle it?",
    options: [
      { label: "I stop talking and let them take over.", value: 'low' },
      { label: "I feel frustrated but only sometimes try to finish my point.", value: 'moderate' },
      { label: "I politely say 'I'd like to finish my thought' and continue.", value: 'high' },
    ],
  },
  // Pillar 4: Decision-Making & Risk-Taking
  {
    id: 16,
    pillar: 3,
    scenario: "You have to choose between two job or course options. One is safer, one is more exciting but riskier. What do you do?",
    options: [
      { label: "I take the safer option because I'm afraid of failing at the riskier one.", value: 'low' },
      { label: "I go back and forth; I need a lot of reassurance from others.", value: 'moderate' },
      { label: "I weigh pros and cons and make a decision I can stand by, even if it's the riskier one.", value: 'high' },
    ],
  },
  {
    id: 17,
    pillar: 3,
    scenario: "Your team can't agree on an approach. You have a clear opinion. What do you do?",
    options: [
      { label: "I keep my opinion to myself and go along with the majority.", value: 'low' },
      { label: "I share it once; if no one agrees, I drop it.", value: 'moderate' },
      { label: "I present my reasoning and advocate for it while staying open to feedback.", value: 'high' },
    ],
  },
  {
    id: 18,
    pillar: 3,
    scenario: "You made a decision that didn't work out. How do you react?",
    options: [
      { label: "I feel like a failure and avoid making big decisions for a while.", value: 'low' },
      { label: "I feel bad but try to tell myself everyone makes mistakes.", value: 'moderate' },
      { label: "I reflect on what I learned and use it for the next decision.", value: 'high' },
    ],
  },
  {
    id: 19,
    pillar: 3,
    scenario: "You're offered a new role or project that stretches your skills. What is your response?",
    options: [
      { label: "I decline because I might not be good enough.", value: 'low' },
      { label: "I say yes but feel anxious and keep doubting myself.", value: 'moderate' },
      { label: "I accept and see it as a chance to learn and grow.", value: 'high' },
    ],
  },
  {
    id: 20,
    pillar: 3,
    scenario: "You have to give a short presentation. How do you prepare and feel?",
    options: [
      { label: "I'm very nervous and assume I'll do badly; I avoid practicing in front of anyone.", value: 'low' },
      { label: "I practice but still worry about messing up or being judged.", value: 'moderate' },
      { label: "I prepare well and feel I can deliver it adequately even if I'm a bit nervous.", value: 'high' },
    ],
  },
  // Pillar 5: Personal Growth & Learning Mindset
  {
    id: 21,
    pillar: 4,
    scenario: "You receive critical feedback on something you worked hard on. What is your reaction?",
    options: [
      { label: "I feel defensive and think the person is wrong or unfair.", value: 'low' },
      { label: "I listen but feel hurt and find it hard to act on the feedback.", value: 'moderate' },
      { label: "I take it in and think about how I can improve.", value: 'high' },
    ],
  },
  {
    id: 22,
    pillar: 4,
    scenario: "You fail at a task you thought you'd do well on. What do you tell yourself?",
    options: [
      { label: "I'm not cut out for this; I should stick to what I know.", value: 'low' },
      { label: "Maybe I can get better, but it's really discouraging.", value: 'moderate' },
      { label: "This is a chance to learn what went wrong and try again.", value: 'high' },
    ],
  },
  {
    id: 23,
    pillar: 4,
    scenario: "Someone younger or less experienced does better than you at something. How do you feel?",
    options: [
      { label: "I feel threatened and try to downplay their success.", value: 'low' },
      { label: "I feel a bit envious but try to be polite.", value: 'moderate' },
      { label: "I'm curious what they did and open to learning from them.", value: 'high' },
    ],
  },
  {
    id: 24,
    pillar: 4,
    scenario: "You have a chance to learn a new skill that's not required for your role. What do you do?",
    options: [
      { label: "I skip it; I don't have time or I'm not the type to pick up new things.", value: 'low' },
      { label: "I'm interested but worry I won't be good at it.", value: 'moderate' },
      { label: "I give it a try and see it as an investment in my growth.", value: 'high' },
    ],
  },
  {
    id: 25,
    pillar: 4,
    scenario: "Looking back at the past year, how do you view your mistakes and setbacks?",
    options: [
      { label: "They prove I'm not good enough.", value: 'low' },
      { label: "They're part of life but I'd rather not think about them.", value: 'moderate' },
      { label: "They taught me something and I'm better for them.", value: 'high' },
    ],
  },
]
